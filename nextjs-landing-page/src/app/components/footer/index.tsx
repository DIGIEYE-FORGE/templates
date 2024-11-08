import React from "react";
import {
  certifications,
  company,
  complianceText,
  contactEmail,
  copyright,
  policies,
  socialLinks,
} from "./data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 p-container text-slate-400">
      <div className="container mx-auto">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="space-x-4">
            {policies.map((policy, index) => (
              <React.Fragment key={policy.name}>
                <Link
                  href={policy.href}
                  className="transition-colors hover:text-slate-200"
                >
                  {policy.name}
                </Link>
                {index < policies.length - 1 && <span>•</span>}
              </React.Fragment>
            ))}
          </div>
          <Link
            href={`mailto:${contactEmail}`}
            className="underline transition-colors hover:text-slate-200"
          >
            {contactEmail}
          </Link>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="space-y-2">
            <div className="font-medium text-emerald-500">{company.name}</div>
            <div className="text-sm">
              NIP {company.nip} • REGON {company.regon}
            </div>
            <div className="text-sm">{company.address}</div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="transition-colors hover:text-slate-200"
                >
                  <link.icon className="h-6 w-6" />
                  <span className="sr-only">{link.name}</span>
                </Link>
              ))}
            </div>
            <div className="ml-4 flex items-center gap-2">
              {certifications.map((cert) => (
                <span key={cert} className="text-2xl">
                  {cert}
                </span>
              ))}
              <div className="ml-2 text-xs">
                {complianceText.split("/").map((text, index) => (
                  <React.Fragment key={index}>
                    {text}
                    {index === 0 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-sm">{copyright}</div>
      </div>
    </footer>
  );
}
