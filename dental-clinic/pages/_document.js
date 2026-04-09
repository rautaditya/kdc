import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Yash Super Speciality Dental Clinic - Expert dental care in Latur. Services: Implants, Root Canal, Braces, Teeth Whitening. Dr. Ashwin Kodgi & Dr. Shruti Kodgi. Open until 9 PM." />
        <meta name="keywords" content="dental clinic latur, dentist latur, root canal latur, dental implants latur, orthodontics latur, Dr Ashwin Kodgi" />
        <meta name="theme-color" content="#2F80ED" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Yash Super Speciality Dental Clinic - Latur" />
        <meta property="og:description" content="World-class dental care in the heart of Latur. Book your appointment today." />
        <meta property="og:type" content="website" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        
        {/* Favicon */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🦷</text></svg>" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
