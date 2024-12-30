export default function FeaturesItem({ icon, title, description }) {
  return (
    <div className='feature-item'>
      <img alt='Chat Icon' className='feature-icon' src={icon} />
      <h3 className='feature-item-title'>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
