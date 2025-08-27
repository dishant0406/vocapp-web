"use client"

import { Button } from "@/components/ui/button"
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle
} from "@/components/ui/credenza"
import { Input } from "@/components/ui/input"
import useWaitlistStore from "@/store/waitlist"
import { ExternalLink, Smartphone } from "lucide-react"
import * as React from "react"
import { toast } from "sonner"

export function JoinWaitlistModal() {
  const [email, setEmail] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [message, setMessage] = React.useState("")
  const {isOpen:open, setIsOpen:setOpen} = useWaitlistStore()

  const handlePlayStoreClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.dishant.vocapp', '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")


    try {
      const response = await fetch("/api/join-waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()

      if (response.ok) {
        setMessage(result.message || "Successfully joined the waitlist!")
        setEmail("") // Clear email field on success
        
        toast.success("Added to mailing list!", {
          description: "Thanks for subscribing! Don't forget to download the app from Google Play Store.",
          duration: 5000,
        })
        setTimeout(() => setOpen(false), 500); 
      } else {
        setMessage(result.message || "An error occurred.")
      }
    } catch (error) {
      setMessage("Failed to submit email. Please try again.")
      console.error("Submission error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // Reset message when modal is closed or opened
  React.useEffect(() => {
    if (!open) {
      setMessage("");
      setEmail(""); // Also clear email when modal is closed
    }
  }, [open]);

  return (
    <Credenza open={open} onOpenChange={setOpen}>
      <CredenzaContent>
        <CredenzaHeader>
          <CredenzaTitle className="text-2xl font-bold">Stay Updated</CredenzaTitle>
          <CredenzaDescription className="text-base">
            The app is now live on Google Play! Join our mailing list to get updates about new features, tips, and announcements.
          </CredenzaDescription>
        </CredenzaHeader>
        <form onSubmit={handleSubmit}>
          <CredenzaBody>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col gap-2 mb-4">
                <Button
                  type="button"
                  onClick={handlePlayStoreClick}
                  className="w-full py-4 bg-green-600 hover:bg-green-700 font-bold flex items-center justify-center gap-2"
                >
                  <Smartphone className="w-5 h-5" />
                  Download on Google Play
                  <ExternalLink className="w-4 h-4" />
                </Button>
                <p className="text-sm text-gray-600 text-center">Or subscribe for updates:</p>
              </div>
              <div className="flex flex-col gap-2">
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="col-span-3 py-[25px] text-base"
                  placeholder="Enter your email"
                  required
                  disabled={isLoading}
                />
              </div>
              {message && <p className={`text-sm ${message.startsWith("Success") ? "text-green-600" : "text-red-600"}`}>{message}</p>}
            </div>
          </CredenzaBody>
          <CredenzaFooter>
            <CredenzaClose asChild>
              <Button className="!py-6 px-8 text-base" variant="outline" disabled={isLoading}>Cancel</Button>
            </CredenzaClose>
            <Button className="!py-6 px-8 text-base" type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </CredenzaFooter>
        </form>
      </CredenzaContent>
    </Credenza>
  )
}