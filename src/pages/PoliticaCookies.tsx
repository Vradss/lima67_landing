import LegalLayout from './LegalLayout';

export default function PoliticaCookies() {
  return (
    <LegalLayout title="Política de Cookies">
      <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-stone mb-8">
        Última actualización: {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
      </p>

      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario
        (ordenador, tablet, móvil) al visitarlos. Permiten recordar preferencias, mejorar la navegación y
        analizar el uso del sitio.
      </p>

      <h2>2. Tipos de cookies utilizadas</h2>
      <p>
        Esta web puede utilizar los siguientes tipos de cookies:
      </p>
      <ul>
        <li><strong>Cookies técnicas (necesarias):</strong> Permiten la navegación y el funcionamiento básico de la web. Son esenciales y no requieren consentimiento.</li>
        <li><strong>Cookies de preferencias:</strong> Recuerdan configuraciones elegidas por el usuario (idioma, región).</li>
        <li><strong>Cookies analíticas:</strong> Permiten medir y analizar el uso de la web (p. ej. Google Analytics). Requieren consentimiento previo.</li>
      </ul>

      <h2>3. Cookies de terceros</h2>
      <p>
        Si se utilizan servicios de terceros (analytics, mapas, redes sociales), estos pueden instalar sus
        propias cookies. En el momento de implementar estos servicios, se actualizará el presente documento
        con la información correspondiente.
      </p>

      <h2>4. Gestión y consentimiento</h2>
      <p>
        Al visitar la web por primera vez, se mostrará un banner informativo sobre el uso de cookies.
        El usuario podrá aceptar todas las cookies, rechazar las no esenciales o configurar sus preferencias.
        El consentimiento puede modificarse en cualquier momento.
      </p>

      <h2>5. Cómo desactivar las cookies</h2>
      <p>
        Puede configurar su navegador para bloquear o eliminar las cookies. Tenga en cuenta que restringir
        determinadas cookies puede afectar al funcionamiento o la experiencia de uso del sitio. Las
        instrucciones se encuentran en la configuración de privacidad de cada navegador (Chrome, Firefox,
        Safari, Edge, etc.).
      </p>

      <h2>6. Más información</h2>
      <p>
        Para más información sobre el uso de cookies y la normativa aplicable, puede consultar la Guía sobre
        el uso de las cookies de la Agencia Española de Protección de Datos (AEPD).
      </p>
    </LegalLayout>
  );
}
