"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/actions";
import { helpOptions } from "@/lib/site";
import { Arrow } from "./Icons";

const initial: ContactState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, initial);
  const err = state.errors ?? {};
  const v = state.values;

  if (state.status === "success") {
    return (
      <div className="form form--done" role="status">
        <p className="display-sm">Thank you.</p>
        <p>{state.message}</p>
      </div>
    );
  }

  return (
    <form className="form" action={action} noValidate>
      <div className="form__row">
        <Field id="name" label="Name" required error={err.name} autoComplete="name" defaultValue={v?.name} />
        <Field
          id="email"
          label="Email"
          type="email"
          required
          error={err.email}
          autoComplete="email"
          defaultValue={v?.email}
        />
      </div>
      <Field id="phone" label="Phone" type="tel" autoComplete="tel" defaultValue={v?.phone} />

      <fieldset className="chips">
        <legend>I need help with</legend>
        <div className="chips__list">
          {helpOptions.map((opt) => (
            <label className="chip" key={opt}>
              <input type="checkbox" name="help" value={opt} defaultChecked={v?.help.includes(opt)} />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className={`field ${err.message ? "has-error" : ""}`}>
        <label htmlFor="message">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          defaultValue={v?.message}
          aria-invalid={!!err.message}
          aria-describedby={err.message ? "message-error" : undefined}
        />
        {err.message && (
          <p className="field__error" id="message-error">
            {err.message}
          </p>
        )}
      </div>

      <div className="hp" aria-hidden="true">
        <label htmlFor="company_website">Leave this field empty</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form__footer">
        <button className="btn btn--accent" type="submit" disabled={pending}>
          {pending ? "Sending…" : "Send message"} <Arrow size={18} />
        </button>
        <p className="form__note">* Required</p>
      </div>
      <p className={`form__status ${state.status === "error" ? "is-error" : ""}`} aria-live="polite">
        {state.message}
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
  error,
  autoComplete,
  defaultValue,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
  defaultValue?: string;
}) {
  return (
    <div className={`field ${error ? "has-error" : ""}`}>
      <label htmlFor={id}>
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p className="field__error" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}
