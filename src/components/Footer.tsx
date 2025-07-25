
import { Code, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card tech-border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6">
            <Code className="h-6 w-6 text-primary" />
            <p className="text-xl font-bold code-font">Tian Jacobs</p>
          </div>
          
          <div className="flex space-x-6 mb-8">
            <a href="https://github.com/Tian-Jacobs" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/tian-jacobs" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-2">
              <span className="text-primary code-font">&lt;</span> Designed and coded with <span className="text-red-500">❤</span> 
              <span className="text-primary code-font"> /&gt;</span>
            </p>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Tian Jacobs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
