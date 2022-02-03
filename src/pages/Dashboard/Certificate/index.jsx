import React, { useState, useLayoutEffect } from "react";
import UnauthorizedTab from "../../../components/Shared/UnauthorizedTab";
import Loading from "../../../components/Shared/Loading";
import useApi from "../../../hooks/useApi";
import CertificateFrame from "../../../components/Certificate";

export default function Certificate() {
  const { payment, enrollment } = useApi();

  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [paid, setPaid] = useState(false);

  useLayoutEffect(() => {
    payment.getPaymentInfo().then(response => {
      if (response.data.id) {
        setPaid(true);
      }

      enrollment.getPersonalInformations().then(res => {
        setLoading(false);
        if (res.data.id) setEnabled(true);
      });
    });
  }, []);

  if (loading) return <Loading />;

  if (paid && enabled) return <CertificateFrame />;

  return (
    <UnauthorizedTab message='Você precisa ter confirmado pagamento antes de acessar o certificado' />
  );
}
