import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Answers = {
  industry?: string;
  purchases?: string;
  sources?: string;
  email?: string;
  phone?: string;
};

const questions = [
  {
    key: "industry" as const,
    title: "Are you in pharma or consumer healthcare?",
    options: ["Pharma", "Consumer healthcare", "Both", "Other"],
  },
  {
    key: "purchases" as const,
    title: "Do you currently purchase sell-out data from outlets or distributors?",
    options: [
      "Yes",
      "No",
      "I have another use case that needs data consolidation",
    ],
  },
  {
    key: "sources" as const,
    title: "How many data sources are you looking to stitch?",
    options: ["Less than 50", "50 – 100", "101+"],
  },
];

export const FitQuizDialog = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState(false);

  const total = questions.length + 1;
  const progress = ((step + (submitted ? 1 : 0)) / total) * 100;

  const reset = () => {
    setStep(0);
    setAnswers({});
    setSubmitted(false);
  };

  const handleClose = (v: boolean) => {
    onOpenChange(v);
    if (!v) setTimeout(reset, 200);
  };

  const current = questions[step];
  const currentAnswer = current ? answers[current.key] : undefined;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            See if UnifySales is right for your team
          </DialogTitle>
          <DialogDescription>
            3 quick questions — takes under a minute.
          </DialogDescription>
        </DialogHeader>

        <Progress value={progress} className="h-1.5" />

        {!submitted && current && (
          <div className="space-y-5 py-2">
            <p className="text-sm font-medium">
              {step + 1}. {current.title}
            </p>
            <RadioGroup
              value={currentAnswer}
              onValueChange={(v) =>
                setAnswers((a) => ({ ...a, [current.key]: v }))
              }
              className="space-y-2"
            >
              {current.options.map((opt) => (
                <Label
                  key={opt}
                  className="flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-background p-3 text-sm transition-smooth hover:border-primary/40 hover:bg-accent/40"
                >
                  <RadioGroupItem value={opt} />
                  {opt}
                </Label>
              ))}
            </RadioGroup>

            <div className="flex justify-between pt-2">
              <Button
                variant="ghost"
                size="sm"
                disabled={step === 0}
                onClick={() => setStep((s) => s - 1)}
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
              <Button
                size="sm"
                className="bg-gradient-primary shadow-glow"
                disabled={!currentAnswer}
                onClick={() => setStep((s) => s + 1)}
              >
                {step === questions.length - 1 ? "Continue" : "Next"}{" "}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {!submitted && !current && (
          <form
            className="space-y-4 py-2"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <p className="text-sm text-muted-foreground">
              Leave your work email or number and our team will reach out to set
              up a tailored demo.
            </p>
            <div className="space-y-2">
              <Label htmlFor="email">Work email</Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="you@company.com"
                value={answers.email ?? ""}
                onChange={(e) =>
                  setAnswers((a) => ({ ...a, email: e.target.value }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+60 12 345 6789"
                value={answers.phone ?? ""}
                onChange={(e) =>
                  setAnswers((a) => ({ ...a, phone: e.target.value }))
                }
              />
            </div>
            <div className="flex justify-between pt-2">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setStep(questions.length - 1)}
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
              <Button
                type="submit"
                size="sm"
                className="bg-gradient-primary shadow-glow"
              >
                Request my demo <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </form>
        )}

        {submitted && (
          <div className="space-y-3 py-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <p className="text-base font-semibold">You're on the list.</p>
            <p className="text-sm text-muted-foreground">
              Thanks — we'll be in touch within one business day to set up your
              tailored UnifySales demo.
            </p>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleClose(false)}
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
