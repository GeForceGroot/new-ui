import { m, LazyMotion, domAnimation } from "framer-motion";

const SectionRight = (props) => {
  const { title, subtitle } = props;

  return (
    <LazyMotion features={domAnimation} strict> 
      <m.div
        initial={{ x: 350 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 2, type: "spring" }}
        className="text-primary-600 p-6 noselect"
      >
        <span
          style={{
            fontWeight: "500",
            marginTop: '100px', color: '#030264'
          }}
        >
          {subtitle}
        </span>
        <h2
          className="tracking-wider text-7xl sm:text-8xl md:text-9xl"
          style={{ marginTop: '20px' }}
        >
          {title.split("").map((char, index) => {
            if(char === " ") {
              return " ";
            }
            return <span key={index} className="bounce">{char}</span>
          })}
        </h2>
      </m.div>
    </LazyMotion>
  );
};

export default SectionRight;