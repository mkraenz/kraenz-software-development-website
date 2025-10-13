"use client";

import sendEmail from "@/app/lib/actions/sendEmail";
import { Field } from "@/components/ui/field";
import { InputGroup } from "@/components/ui/input-group";
import { content } from "@/content";
import { Button, Fieldset, Input, Stack } from "@chakra-ui/react";
import { useFormStatus } from "react-dom";
import {
  LuBriefcaseBusiness,
  LuMail,
  LuMessageSquare,
  LuUser,
} from "react-icons/lu";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type={"submit"}
      width={{ base: "full", md: "200px" }}
      loading={pending}
      disabled={true}
    >
      {content.contact.form.submit}
    </Button>
  );
};

const ContactForm = () => {
  return (
    <form action={sendEmail}>
      <Fieldset.Root size={"lg"} maxW={"md"}>
        <Stack>
          <Fieldset.Legend>{content.contact.form.title}</Fieldset.Legend>
          <Fieldset.HelperText>
            {content.contact.form.description}
          </Fieldset.HelperText>
        </Stack>

        <Fieldset.Content>
          <Field label={content.contact.form.name}>
            <InputGroup flex={"1"} w={"100%"} startElement={<LuUser />}>
              <Input
                name={"name"}
                autoComplete={"name"}
                required
                value={
                  "Please use E-Mail instead. Temporarily disabled due to spam. "
                }
                disabled
              />
            </InputGroup>
          </Field>

          <Field label={content.contact.form.company}>
            <InputGroup
              flex={"1"}
              w={"100%"}
              startElement={<LuBriefcaseBusiness />}
            >
              <Input
                name={"company"}
                autoComplete={"organization"}
                required
                disabled
              />
            </InputGroup>
          </Field>

          <Field label={content.contact.form.email}>
            <InputGroup flex={"1"} w={"100%"} startElement={<LuMail />}>
              <Input
                name={"email"}
                type={"email"}
                autoComplete={"email"}
                required
                disabled
              />
            </InputGroup>
          </Field>

          <Field label={content.contact.form.message}>
            <InputGroup
              flex={"1"}
              w={"100%"}
              startElement={<LuMessageSquare />}
            >
              <Input name={"message"} disabled />
            </InputGroup>
          </Field>
        </Fieldset.Content>

        <SubmitButton />
      </Fieldset.Root>
    </form>
  );
};

export default ContactForm;
