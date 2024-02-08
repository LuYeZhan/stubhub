import { ActionItem, ActionLink } from "./wrappers";

interface TicketActionItemProps {
  iconClass: string;
  actionText: string;
  onClick?: () => void;
}

const TicketActionItem: React.FC<TicketActionItemProps> = ({ iconClass, actionText, onClick }) => {
  return (
    <ActionItem >
      <ActionLink onClick={onClick} >
        <i className={`fa ${iconClass}`}></i>
        <span>{actionText}</span>
      </ActionLink>
    </ActionItem>
  );
};

export default TicketActionItem;
