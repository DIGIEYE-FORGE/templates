import {
  SectionTitle,
  SectionContent,
  Section,
} from "@/app/components/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { data, title } from "./data";

export default function FaqSection() {
  return (
    <Section seperator={false}>
      <SectionTitle>{title}</SectionTitle>
      <SectionContent>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full max-w-screen-md"
        >
          {data.map(({ question, answers }, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="py-6 text-2xl">
                {question}
              </AccordionTrigger>
              <AccordionContent className="space-y-4 text-base text-gray-600">
                {answers.map((answer, index) => (
                  <p key={index}>{answer}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SectionContent>
    </Section>
  );
}
