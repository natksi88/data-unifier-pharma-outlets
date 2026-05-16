import { useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const SignupDialog = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleClose = (v: boolean) => {
    onOpenChange(v);
    if (!v)
      setTimeout(() => {
        setEmail("");
        setPhone("");
        setSubmitted(false);
      }, 200);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            Get access to the live demo
          </DialogTitle>
          <DialogDescription>
            Drop your work email and number — we'll send over demo access and
            reach out to walk you through it.
          </DialogDescription>
        </DialogHeader>

        {!submitted ? (
          <form
            className="space-y-4 py-2"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="signup-email">Work email</Label>
              <Input
                id="signup-email"
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-phone">Phone number</Label>
              <Input
                id="signup-phone"
                type="tel"
                required
                placeholder="+60 12 345 6789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-primary shadow-glow"
            >
              Get demo access <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
        ) : (
          <div className="space-y-3 py-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <p className="text-base font-semibold">You're in.</p>
            <p className="text-sm text-muted-foreground">
              Check your inbox shortly — our team will follow up within one
              business day.
            </p>
            <Button size="sm" variant="outline" onClick={() => handleClose(false)}>
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
