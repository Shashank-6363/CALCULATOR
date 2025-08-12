import './InputFields.css';
function InputFields({ inputCalVal }) {

    return (
        <>
            <h4>Casio</h4>
            <input type="text" value={inputCalVal} readOnly />
        </>
    );
};
export default InputFields;