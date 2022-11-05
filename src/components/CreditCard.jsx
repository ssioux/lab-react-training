function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;
 
  // Everything with "*" but the last 2 digits
    const numberTransform = "*".repeat(number.length -4) + number.slice(-4, number.length)
  // Transform the number expiration year into a String for use the Method.slice
    const year2str = expirationYear.toString().slice(-2)
  
  
    
  return (
    <div
      style={{
        backgroundColor: `${bgColor}`,
        width: '400px',
        color: `${color}`,
      }}
    >
      <p>type: {type}</p>
      <p>number: {numberTransform}</p>
      <p>Expires: {expirationMonth} / {year2str}</p>
      <p>bank: {bank}</p>
      <p>owner: {owner}</p>
    </div>
  );
}

export default CreditCard;
