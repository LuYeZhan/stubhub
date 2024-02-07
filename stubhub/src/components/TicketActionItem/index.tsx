import { ActionItem, ActionLink } from "./wrappers";

interface TicketActionItemProps {
  iconClass: string;
  actionText: string;
}

const TicketActionItem: React.FC<TicketActionItemProps> = ({ iconClass, actionText }) => {
  return (
    <ActionItem>
      <ActionLink href="#">
        <i className={`fa ${iconClass}`}></i>
        <span>{actionText}</span>
      </ActionLink>
    </ActionItem>
  );
};

export default TicketActionItem;
