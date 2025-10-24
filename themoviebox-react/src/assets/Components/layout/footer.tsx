import { Facebook, Instagram, Youtube } from "lucide-react";
import { FooterLink } from "../../ui/footer-link";

export function Footer() {
  const var1 = "teste";

  console.log(var1);

  return (
    <footer>
      <div className="bg-[#1c1c1c] border-t border-[#333] p-12 my-0 mx-auto max-w-6xl flex items-center text-white py-6 px-4 flex-col md:flex-row justify-between">
        <p className="text-[#a0a0a0] text-xs">The MovieBox 2025 - Todos os direitos são reservados</p>
        <ul className="flex list-none mt-4 gap-3">
          <li>
            <FooterLink>
              <Facebook />
            </FooterLink>
          </li>
          <li>
            <FooterLink>
              <Instagram />
            </FooterLink>
          </li>
          <li>
            <FooterLink>
              <Youtube />
            </FooterLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}