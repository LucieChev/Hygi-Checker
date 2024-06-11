import { Search } from "lucide-react";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface FormCheckProps {
  inputId: string;
  checkText: string;
  className: string;
  variant: "outline" | "white";
}

export default function FormCheck({
  inputId,
  checkText,
  className,
  variant,
}: FormCheckProps) {
  const router = useRouter();
  const [urlPath, setUrlPath] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      router.push(`/check/response?url=${encodeURIComponent(urlPath)}`);
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la vérification de l'URL:",
        error
      );
    }
  };
  // Détermine si le bouton doit être désactivé
  const isSubmitDisabled = urlPath.trim() === "";

  return (
    <div className="w-[300px] flex flex-col gap-2">
      <form className={`flex gap-2 ${className}`} onSubmit={handleSubmit}>
        <Input
          id={inputId}
          placeholder="enter URL"
          className="text-black"
          value={urlPath}
          onChange={(e) => setUrlPath(e.target.value)}
        />
        <div>
          <Button variant={variant} type="submit" disabled={isSubmitDisabled}>
            <Search className="mr-2 h-4 w-4" />
            {checkText}
          </Button>
        </div>
      </form>
    </div>
  );
}
