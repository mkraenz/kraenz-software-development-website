import { Field } from "@/components/ui/field";
import { Button, Fieldset, Input, Stack } from "@chakra-ui/react";
import { FC } from "react";
import {
  LuBriefcaseBusiness,
  LuMail,
  LuMessageSquare,
  LuUser,
} from "react-icons/lu";
import { InputGroup } from "../components/ui/input-group";
import { content } from "../content";

const ContactForm: FC = () => {
  return (
    <form>
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
              <Input name={"name"} autoComplete={"name"} required />
            </InputGroup>
          </Field>

          <Field label={content.contact.form.company}>
            <InputGroup
              flex={"1"}
              w={"100%"}
              startElement={<LuBriefcaseBusiness />}
            >
              <Input name={"company"} autoComplete={"organization"} required />
            </InputGroup>
          </Field>

          <Field label={content.contact.form.email}>
            <InputGroup flex={"1"} w={"100%"} startElement={<LuMail />}>
              <Input name={"email"} type={"email"} autoComplete={"email"} required />
            </InputGroup>
          </Field>

          <Field label={content.contact.form.message}>
            <InputGroup flex={"1"} w={"100%"} startElement={<LuMessageSquare />}>
              <Input name={"message"} />
            </InputGroup>
          </Field>
        </Fieldset.Content>

        {/* TODO implement submission */}
        <Button type={"submit"} width={{ base: "full", md: "200px" }}>
          {content.contact.form.submit}
        </Button>
      </Fieldset.Root>
    </form>
  );
};

export default ContactForm;
