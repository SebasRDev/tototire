import { useState } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import { useCart } from "../../state/useCart";
import { formatPrice, numberToCurrency } from "../../helpers/helpers";
import styles from "../../styles/pages/Checkout.module.css";

const EMPTY_FORM = {
  nombre: "",
  email: "",
  telefono: "",
  direccion: "",
  ciudad: "",
  departamento: "",
  codigoPostal: "",
  notas: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Checkout = () => {
  const router = useRouter();
  const { products, totalPrice } = useCart();
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [widgetReady, setWidgetReady] = useState(false);

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const validate = () => {
    const nextErrors = {};
    if (!form.nombre.trim()) nextErrors.nombre = "Requerido";
    if (!EMAIL_REGEX.test(form.email)) nextErrors.email = "Email inválido";
    if (!form.telefono.trim()) nextErrors.telefono = "Requerido";
    if (!form.direccion.trim()) nextErrors.direccion = "Requerido";
    if (!form.ciudad.trim()) nextErrors.ciudad = "Requerido";
    if (!form.departamento.trim()) nextErrors.departamento = "Requerido";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const openWompiWidget = ({ reference, amountInCents, currency, signature, publicKey }) => {
    const checkout = new window.WidgetCheckout({
      currency,
      amountInCents,
      reference,
      publicKey,
      signature: { integrity: signature },
      redirectUrl: `${window.location.origin}/checkout/confirmacion?reference=${reference}`,
      customerData: {
        email: form.email,
        fullName: form.nombre,
        phoneNumber: form.telefono,
      },
    });

    checkout.open(() => {
      router.push(`/checkout/confirmacion?reference=${reference}`);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (products.length === 0) return;
    if (!validate()) return;
    if (!widgetReady || !window.WidgetCheckout) {
      setSubmitError("El widget de pago aún está cargando, intenta de nuevo.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/crear-pedido", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: products.map((p) => ({ slug: p.slug, cantidad: p.selected })),
          customer: {
            nombre: form.nombre,
            email: form.email,
            telefono: form.telefono,
          },
          shipping: {
            direccion: form.direccion,
            ciudad: form.ciudad,
            departamento: form.departamento,
            codigoPostal: form.codigoPostal,
            notas: form.notas,
          },
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitError(
          data?.stockErrors
            ? "Algunos productos no tienen suficiente stock disponible."
            : data?.error || "No se pudo crear el pedido."
        );
        return;
      }

      openWompiWidget(data);
    } catch {
      setSubmitError("Ocurrió un error creando el pedido. Intenta de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={`container ${styles.checkout}`}>
      <Script
        src="https://checkout.wompi.co/widget.js"
        onReady={() => setWidgetReady(true)}
      />

      <h1 className={styles.title}>Finalizar compra</h1>

      {products.length === 0 ? (
        <p className={styles.empty}>Tu carrito está vacío.</p>
      ) : (
        <div className={styles.layout}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Datos de contacto</h2>
            <div className={styles.field}>
              <label htmlFor="nombre">Nombre completo</label>
              <input
                id="nombre"
                value={form.nombre}
                onChange={handleChange("nombre")}
              />
              {errors.nombre && <span className={styles.error}>{errors.nombre}</span>}
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange("email")}
              />
              {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>
            <div className={styles.field}>
              <label htmlFor="telefono">Teléfono</label>
              <input
                id="telefono"
                value={form.telefono}
                onChange={handleChange("telefono")}
              />
              {errors.telefono && <span className={styles.error}>{errors.telefono}</span>}
            </div>

            <h2>Envío a domicilio</h2>
            <div className={styles.field}>
              <label htmlFor="direccion">Dirección</label>
              <input
                id="direccion"
                value={form.direccion}
                onChange={handleChange("direccion")}
              />
              {errors.direccion && <span className={styles.error}>{errors.direccion}</span>}
            </div>
            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label htmlFor="ciudad">Ciudad</label>
                <input
                  id="ciudad"
                  value={form.ciudad}
                  onChange={handleChange("ciudad")}
                />
                {errors.ciudad && <span className={styles.error}>{errors.ciudad}</span>}
              </div>
              <div className={styles.field}>
                <label htmlFor="departamento">Departamento</label>
                <input
                  id="departamento"
                  value={form.departamento}
                  onChange={handleChange("departamento")}
                />
                {errors.departamento && (
                  <span className={styles.error}>{errors.departamento}</span>
                )}
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="codigoPostal">Código postal (opcional)</label>
              <input
                id="codigoPostal"
                value={form.codigoPostal}
                onChange={handleChange("codigoPostal")}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="notas">Notas de entrega (opcional)</label>
              <textarea
                id="notas"
                value={form.notas}
                onChange={handleChange("notas")}
              />
            </div>

            {submitError && <p className={styles.submitError}>{submitError}</p>}

            <button className={styles.payButton} type="submit" disabled={submitting}>
              {submitting ? "Procesando..." : `Pagar $${numberToCurrency(totalPrice)}`}
            </button>
          </form>

          <div className={styles.summary}>
            <h2>Tu pedido</h2>
            {products.map((product) => (
              <div className={styles.summaryItem} key={product.slug}>
                <div>
                  <p className={styles.summaryRef}>
                    {product.DISENO} {product.ANCHO}/{product.PERFIL}R{product.RIN}
                  </p>
                  <p className={styles.summaryQty}>Cantidad: {product.selected}</p>
                </div>
                <p className={styles.summaryPrice}>
                  ${numberToCurrency(formatPrice(product.PRECIO) * product.selected)}
                </p>
              </div>
            ))}
            <div className={styles.summaryTotal}>
              <span>Total</span>
              <span>${numberToCurrency(totalPrice)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
