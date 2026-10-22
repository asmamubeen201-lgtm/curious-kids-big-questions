"use client";

import { useState } from "react";

// Launch-list email capture. The form UI is live, but submissions are not
// wired to a provider yet — it tells parents honestly and never pretends
// to store an address. Connect an email provider (e.g. ConvertKit /
// Mailchimp form endpoint) before launch marketing starts.
export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="email-capture" aria-label="Join the launch list">
      <h2>Be first to know when the book launches</h2>
      <p>
        Join the parents&apos; launch list and we&apos;ll email you on launch
        day — plus one free printable question card every month. No spam,
        ever.
      </p>
      {done ? (
        <p className="capture-done" role="status">
          Thank you! The launch list opens officially very soon — please check
          back on launch week to confirm your spot.
        </p>
      ) : (
        <form
          className="capture-form"
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
        >
          <label className="sr-only" htmlFor="launch-email">
            Parent email address
          </label>
          <input
            id="launch-email"
            type="email"
            required
            placeholder="Parent email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Join the launch list</button>
        </form>
      )}
    </section>
  );
}
