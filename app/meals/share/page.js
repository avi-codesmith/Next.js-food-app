"use client";

import ShareMeal from "@/lib/actions";
import ImagePicker from "./image-picker";
import classes from "./page.module.css";
import FormButton from "@/components/meals/form-button";
import { useFormState } from "react-dom";

export default function ShareMealPage() {
  const [state, formAction] = useFormState(ShareMeal, {
    message: null,
    enteredValues: {
      name: "",
      email: "",
      title: "",
      summary: "",
      instructions: "",
    },
  });

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
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={state?.enteredValues?.name}
              />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue={state?.enteredValues?.email}
              />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={state?.enteredValues?.title}
            />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input
              type="text"
              id="summary"
              name="summary"
              defaultValue={state?.enteredValues?.summary}
            />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              defaultValue={state?.enteredValues?.instructions}
            ></textarea>
          </p>
          <ImagePicker
            label={"your image"}
            name={"image"}
            dValue={state?.enteredValues?.instructions}
          />
          <p>{state?.message}</p>
          <p className={classes.actions}>
            <FormButton />
          </p>
        </form>
      </main>
    </>
  );
}
