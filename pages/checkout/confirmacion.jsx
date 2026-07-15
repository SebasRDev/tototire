import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useCart } from "../../state/useCart";
import styles from "../../styles/pages/Confirmacion.module.css";

const MAX_ATTEMPTS = 30;
const POLL_INTERVAL_MS = 2000;

const STATUS_COPY = {
  APPROVED: {
    title: "¡Pago aprobado!",
    message: "Tu pedido fue confirmado, en breve te contactaremos para coordinar la entrega.",
  },
  DECLINED: {
    title: "Pago rechazado",
    message: "Tu pago no pudo ser procesado. Puedes intentar de nuevo.",
  },
  VOIDED: {
    title: "Pago anulado",
    message: "La transacción fue anulada. Puedes intentar de nuevo.",
  },
  ERROR: {
    title: "Ocurrió un error",
    message: "Hubo un problema procesando tu pago. Puedes intentar de nuevo.",
  },
};

const Confirmacion = () => {
  const router = useRouter();
  const { reference } = router.query;
  const { clearCart } = useCart();
  const [status, setStatus] = useState("PENDING");
  const [timedOut, setTimedOut] = useState(false);
  const attemptsRef = useRef(0);
  const clearedRef = useRef(false);

  useEffect(() => {
    if (!reference) return;

    let cancelled = false;

    const poll = async () => {
      try {
        const res = await fetch(
          `/api/estado-pedido?reference=${encodeURIComponent(reference)}`
        );
        if (res.ok) {
          const data = await res.json();
          if (!cancelled) setStatus(data.status);
          if (data.status !== "PENDING") return;
        }
      } catch {
        // sigue intentando
      }

      attemptsRef.current += 1;
      if (attemptsRef.current >= MAX_ATTEMPTS) {
        if (!cancelled) setTimedOut(true);
        return;
      }
      if (!cancelled) setTimeout(poll, POLL_INTERVAL_MS);
    };

    poll();

    return () => {
      cancelled = true;
    };
  }, [reference]);

  useEffect(() => {
    if (status === "APPROVED" && !clearedRef.current) {
      clearedRef.current = true;
      clearCart();
    }
  }, [status, clearCart]);

  if (status === "PENDING") {
    return (
      <div className={`container ${styles.confirmacion}`}>
        <div className={styles.spinner} />
        <h1>Verificando tu pago...</h1>
        {timedOut ? (
          <p>
            Seguimos procesando tu pago. Te confirmaremos por correo apenas se
            resuelva.
          </p>
        ) : (
          <p>Esto puede tardar unos segundos, no cierres esta página.</p>
        )}
      </div>
    );
  }

  const copy = STATUS_COPY[status] ?? STATUS_COPY.ERROR;
  const failed = status !== "APPROVED";

  return (
    <div className={`container ${styles.confirmacion}`}>
      <h1 className={failed ? styles.titleFail : styles.titleSuccess}>
        {copy.title}
      </h1>
      <p>{copy.message}</p>
      {failed && (
        <Link className={styles.retryLink} href="/checkout">
          Volver a intentar
        </Link>
      )}
    </div>
  );
};

export default Confirmacion;
