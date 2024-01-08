import Link from "next/link";
import Image from "next/image";

export const FooterSite = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <footer className="bg-black text-white p-4 mt-auto flex items-center justify-between">
        <span>@ Copywright 2022 Sébastien Wendling</span>
        <div>
          <Link href="./">
            <Image
              src="/logoSWC.jpg"
              width="50"
              height="50"
              alt="logo SecureWeb Creation"
            />
          </Link>
        </div>
        <ul className="ml-4 flex justify-end">
          <li className="mr-5">
            <Link href="../contact">Contact</Link>
          </li>
          <li className="mr-5">
            <Link href="mailto:sebastienwendling@iteeweb.fr">Email</Link>
          </li>
        </ul>
        <div className="social-icons">
          <a href="lien-de-votre-page-facebook">
            <Image
              src="/iconsSociaux/facebook.png"
              width={20}
              height={20}
              alt="facebook"
              className="rounded-lg mx-auto"
            />
          </a>
        </div>
        <div className="social-icons">
          <a href="lien-de-votre-page-instagram">
            <Image
              src="/iconsSociaux/instagram.png"
              width={20}
              height={20}
              alt="instagram"
              className="rounded-lg mx-auto"
            />
          </a>
        </div>
        <div className="social-icons">
          <a href="lien-de-votre-page-whatsapp">
            <Image
              src="/iconsSociaux/whatsapp.png"
              width={20}
              height={20}
              alt="whatsapp"
              className="rounded-lg mx-auto"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};
