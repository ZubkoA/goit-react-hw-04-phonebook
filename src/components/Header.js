import PropTypes from 'prop-types';

function Header({ title, titleContacts }) {
  return (
    <>
      {title && <h1>{title}</h1>}
      {titleContacts && <h2>{titleContacts}</h2>}
    </>
  );
}
Header.propTypes = {
  title: PropTypes.string,
  titleContacts: PropTypes.string,
};
export default Header;
