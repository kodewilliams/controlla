import "./Sampler.css";
import { FC, useContext, useEffect } from "react";
import { ConfigContext } from "../../states/config";
import { FiSettings } from "react-icons/fi";

interface Props {
  id: string;
  mapping: string;
}

const SamplerConfig: FC<any> = ({ id, children }) => {
  const store = useContext(ConfigContext);

  const handleUpdate = () => {
    let mapping = prompt(`Mapping Key for Pad ${id}`);
    if (mapping) {
      mapping = mapping.toLocaleLowerCase();
      if (!mapping || !mapping.match(/^[0-9a-z]$/))
        alert("Must be one character or number");
      else store.updateMapping(id, mapping);
    }
  };

  useEffect(() => {}, []);

  return (
    <button className='samplerConfig' onClick={() => handleUpdate()}>
      {children}
    </button>
  );
};

const Sampler: FC<Props> = ({ id, mapping }) => {
  return (
    <div className='sampler'>
      <SamplerConfig id={id}>
        <FiSettings />
      </SamplerConfig>
      <div className='pad centered' />
      <span className='label centered'>{`Pad ${id} - ${mapping}`}</span>
    </div>
  );
};

export default Sampler;
