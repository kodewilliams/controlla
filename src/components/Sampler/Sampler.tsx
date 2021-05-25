import "./Sampler.css";
import { FC, useContext } from "react";
import { FiSettings } from "react-icons/fi";
import { ConfigContext } from "../../states/config";
import { observer } from "mobx-react-lite";

const SamplerConfig: FC<any> = observer(({ id, children }) => {
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

  return (
    <button className='samplerConfig' onClick={() => handleUpdate()}>
      {children}
    </button>
  );
});

interface SamplerProps {
  id: string;
  active: boolean;
  mapping: string;
}

const Sampler: FC<SamplerProps> = ({ id, active, mapping }) => {
  return (
    <div className='sampler'>
      <div style={{ display: "none" }}>
        <SamplerConfig id={id}>
          <FiSettings />
        </SamplerConfig>
      </div>
      <div className={`pad centered ${active ? "activePad" : ""}`} />
      <span className='label centered'>{`Pad ${id} - ${mapping}`}</span>
    </div>
  );
};

export default Sampler;
