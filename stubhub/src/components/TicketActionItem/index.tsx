import { ActionItem, ActionLink, Icon } from "./wrappers";

interface TicketActionItemProps {
  icon: JSX.Element;
  actionText: string;
  onClick?: () => void;
}

const TicketActionItem: React.FC<TicketActionItemProps> = ({ icon, actionText, onClick }) => {
  return (
    <ActionItem>
      <ActionLink onClick={onClick}>
      <Icon>{icon}</Icon>
        <span>{actionText}</span>
      </ActionLink>
    </ActionItem>
  );
};

export default TicketActionItem;
