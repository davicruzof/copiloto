export interface ServiceWithCheckboxProps {
  handleSelectService: () => void;
  isActive: boolean;
  title: string;
  isInfo: boolean;
  infoHandle: () => void;
}
