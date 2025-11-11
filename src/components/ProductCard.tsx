import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Edit, Trash2 } from "lucide-react";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    brand: string;
    price: number;
    stock: number;
    description?: string;
    image_url?: string;
  };
  isAdmin?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const ProductCard = ({ product, isAdmin, onEdit, onDelete }: ProductCardProps) => {
  const whatsappMessage = encodeURIComponent(
    `I'm interested in ${product.name} (₹${product.price})`
  );
  const whatsappLink = `https://wa.me/919997429607?text=${whatsappMessage}`;

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg glow-on-hover">
      <CardHeader className="p-0">
        <div className="aspect-square overflow-hidden bg-muted">
          {product.image_url ? (
            <img
              src={product.image_url}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-muted">
              <span className="text-4xl text-muted-foreground">📱</span>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            {product.brand}
          </Badge>
          <Badge 
            variant={product.stock > 0 ? "default" : "destructive"}
            className="text-xs"
          >
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </Badge>
        </div>
        
        <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-foreground">
          {product.name}
        </h3>
        
        {product.description && (
          <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
            {product.description}
          </p>
        )}
        
        <p className="text-2xl font-bold text-primary">
          ₹{product.price.toLocaleString('en-IN')}
        </p>
      </CardContent>
      
      <CardFooter className="flex gap-2 p-4 pt-0">
        {isAdmin ? (
          <>
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={onEdit}
            >
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
            <Button
              variant="destructive"
              size="sm"
              className="flex-1"
              onClick={onDelete}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </>
        ) : (
          <Button
            className="w-full bg-whatsapp hover:bg-whatsapp/90"
            onClick={() => window.open(whatsappLink, '_blank')}
            disabled={product.stock === 0}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Buy on WhatsApp
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
