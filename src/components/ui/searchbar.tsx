import { IconButton, Input } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";
import { LuSearch, LuX } from "react-icons/lu";
import { InputGroup } from "../../components/ui/input-group";

const Searchbar = ({
  onChange,
  onClear,
  value,
  placeholder,
  clearAriaLabel,
}: {
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClear: () => void;
  value: string;
  placeholder: string;
  clearAriaLabel: string;
}) => (
  <InputGroup
    flex={"1"}
    startElement={<LuSearch />}
    endElement={
      <IconButton
        size={"sm"}
        variant={"ghost"}
        onClick={onClear}
        opacity={value ? 1 : 0}
        aria-disabled={!value}
        aria-label={clearAriaLabel}
      >
        <LuX />
      </IconButton>
    }
  >
    <Input
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      minW={200}
      type={"search"}
    />
  </InputGroup>
);

export default Searchbar;
