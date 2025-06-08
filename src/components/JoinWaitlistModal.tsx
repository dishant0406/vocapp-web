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
import * as React from "react"

export function JoinWaitlistModal() {
  const [email, setEmail] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [message, setMessage] = React.useState("")
  const {isOpen:open, setIsOpen:setOpen} = useWaitlistStore()

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
        // Optionally close the modal after a delay or on user action
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
          <CredenzaTitle className="text-2xl font-bold">Join Our Waitlist</CredenzaTitle>
          <CredenzaDescription className="text-base">
            Be the first to know when we launch. Enter your email below.
          </CredenzaDescription>
        </CredenzaHeader>
        <form onSubmit={handleSubmit}>
          <CredenzaBody>
            <div className="grid gap-4 py-4">
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