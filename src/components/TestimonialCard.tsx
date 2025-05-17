
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  imageUrl?: string;
}

const TestimonialCard = ({ 
  quote, 
  author, 
  role, 
  imageUrl = "/placeholder.svg" 
}: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 border border-white/5">
      <div className="mb-4">
        <svg 
          className="h-8 w-8 text-primary/60" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-sm text-foreground/90 mb-4">{quote}</p>
      <div className="flex items-center gap-3">
        <img 
          src={imageUrl} 
          alt={author} 
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <h4 className="text-sm font-medium">{author}</h4>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
