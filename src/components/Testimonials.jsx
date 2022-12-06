import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative pt-0 pb-0 `}>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] pt-0 pb-0 ">
      <h2 className={styles.heading2}>
        Background <br className="sm:block hidden" />
      </h2>
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section> 
);

export default Testimonials;
