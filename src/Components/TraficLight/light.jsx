const Light = ({ config , currentLight}) => {
  const { light } = config; // Destructure light from config
  console.log(light);
  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'column', background:'#000', padding: '10px',gap:'10px'}}>
        {light?.length &&
          light.map((e) => {
            return (
              <div
                key={e}
                style={{ background: e, opacity: currentLight == e ? 1 : 0.3, height: "70px", width: "70px", borderRadius:'50%' }}
              ></div>
            );
          })}
      </div>
    </div>
  );
};

export default Light;
