"use client";

import ShareMeal from "@/lib/actions";
import ImagePicker from "./image-picker";
import classes from "./page.module.css";
import FormButton from "@/components/meals/form-button";
import { useFormState } from "react-dom";

export default function ShareMealPage() {
  const [state, formAction] = useFormState(ShareMeal, { message: null });
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
            ></textarea>
          </p>
          <p>{state?.message}</p>
          <ImagePicker label={"your image"} name={"image"} />
          <p className={classes.actions}>
            <FormButton />
          </p>
        </form>
      </main>
    </>
  );
}
