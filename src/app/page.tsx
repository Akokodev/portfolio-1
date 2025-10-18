import Image from "next/image";
import styles from "./page.module.css";
import { 
  FaPython, 
  FaReact 
} from "react-icons/fa";
import { 
  SiC, 
  SiCplusplus, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript 
} from "react-icons/si";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* --- HERO SECTION --- */}
      <div className={styles.hero}> 
        <Image 
          src='/images/IMG20250414144434-1.jpg' 
          alt='Profile photo' 
          className={styles.image} 
          width={100} 
          height={100}
        />

        <div className={styles.herosub}>
          <h2 className={styles.herotextm}>Bulunga Wilson Mark</h2>
          <h3 className={styles.herotext}>Computer Scientist</h3>
          <h4 className={styles.herotext}>Ready for hiring</h4>
        </div>
      </div>

      {/* --- DESCRIPTION SECTION --- */}
      <div className={styles.divdesc}>
        <h1>Grow your business,</h1>
        <h2>master every move.</h2>
        <h4>Helping businesses thrive with innovative digital strategies,</h4>
        <h4>creative solutions, and measurable outcomes.</h4>
        <button title="call" className={styles.button1}>Book a Call</button>
        <button title="learn" className={styles.button2}>Learn More</button>
      </div>

      {/* --- SKILLS + VIDEO SECTION --- */}
      <div className={styles.divbelow}>
        <h2 className={styles.belowtxt}>Skills and Intro Video</h2>

        {/* --- VIDEO --- */}
        <video 
          src="/me.mp4" 
          controls 
          className={styles.videosection}
        />

        {/* --- SKILLS ICONS --- */}
        <div className={styles.skills}>
          <FaPython className={styles.icon} title="Python" />
          <FaReact className={styles.icon} title="React / React Native" />
          <SiNextdotjs className={styles.icon} title="Next.js" />
          <SiJavascript className={styles.icon} title="JavaScript" />
          <SiTypescript className={styles.icon} title="TypeScript" />
          <SiC className={styles.icon} title="C" />
          <SiCplusplus className={styles.icon} title="C++" />
        </div>
      </div>
    </div>
  );
}
