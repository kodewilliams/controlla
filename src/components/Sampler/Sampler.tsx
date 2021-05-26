import "./Sampler.css";
import {
  FC,
  ChangeEvent,
  useRef,
  useContext,
  useState,
  useEffect,
} from "react";
import { observer } from "mobx-react-lite";
import { ConfigContext } from "../../states/config";
import { Howl } from "howler";

interface SamplerProps {
  id: string;
  active: boolean;
  mapping: string;
}

const Sampler: FC<SamplerProps> = observer(({ id, active, mapping }) => {
  const uploader = useRef<HTMLInputElement>(null);
  const player = useRef<Howl>();
  const store = useContext(ConfigContext);
  const [sampleName, setSampleName] = useState("");
  const [sample, setSample] = useState<File>(store.getSample(id));

  const onClick = () => {
    if (uploader.current) {
      uploader.current.click();
    }
  };

  const onUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || !files[0]) return;

    // Update MobX with sample file
    const sample = files[0];
    store.updateSample(id, sample);

    // Update sample pad locally
    const { name } = sample;
    setSampleName(name);
    setSample(sample);
  };

  useEffect(() => {
    if (active && sample) {
      player.current = new Howl({
        src: URL.createObjectURL(sample),
        format: [sample.name.split(".").pop()!.toLowerCase()],
      });
    }
  }, [id, active, sample]);

  useEffect(() => {
    if (player) {
      if (active) {
        player.current?.play();
      } else player.current?.stop();
    }
  }, [active, player]);

  return (
    <div
      className={`sampler centered ${active ? "activePad" : ""}`}
      onClick={onClick}
    >
      <span className='label centered'>{`Pad ${id} - ${sampleName}`}</span>
      <input
        type='file'
        accept={"audio/*"}
        ref={uploader}
        style={{ display: "none" }}
        onChange={onUpload}
      />
    </div>
  );
});

export default Sampler;
