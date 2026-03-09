import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ImageLightboxProps {
  src: string;
  alt: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ImageLightbox = ({ src, alt, open, onOpenChange }: ImageLightboxProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-lg p-2 bg-transparent border-none shadow-none [&>button]:text-white [&>button]:bg-black/50 [&>button]:rounded-full [&>button]:p-1">
      <img src={src} alt={alt} className="w-full h-auto rounded-lg" />
    </DialogContent>
  </Dialog>
);

export default ImageLightbox;
