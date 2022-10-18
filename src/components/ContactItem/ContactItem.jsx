import { BsTrash } from 'react-icons/bs';
import { Li, Label, Button } from './ContactItem.styled';
import PropTypes from 'prop-types';

const ContactItem = ({id, name,number, handleDelete})=> {
    return (
    <Li>
        <Label>{name}</Label>
        <Label>{number}</Label>
        <Button onClick={()=>handleDelete(id)}>
        <BsTrash color="rgb(255, 245, 238)" />
        </Button>
    </Li>
    );
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

export default ContactItem;