import { SyntheticEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useStorm } from '../../hooks/use.storm';
import { Storm } from '../../model/storm.model';
import styles from './createstormform.module.scss';

export default function CreateStormForm() {
  const navigate = useNavigate();
  const { createStorms, storms, updateStorms } = useStorm();
  const { id } = useParams();
  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const formElement = ev.currentTarget as HTMLFormElement;
    if (!id) {
      const formData = new FormData(formElement);
      createStorms(formData);
      navigate('/storms');
    } else {
      const storm = storms.find((storm) => storm.id === id) as Storm;
      const updatedStorm: Partial<Storm> = {
        id: storm.id,
        title:
          (formElement.elements.namedItem('title') as HTMLInputElement).value ||
          storm.title,
        description:
          (formElement.elements.namedItem('description') as HTMLInputElement)
            .value || storm.description,
        ubication:
          (formElement.elements.namedItem('region') as HTMLSelectElement)
            .value || storm.ubication,
      };
      updateStorms(updatedStorm);
      navigate('/profile');
    }
  };

  return (
    <>
      <form
        role="form"
        onSubmit={handleSubmit}
        className={styles.userForm}
        aria-label="Create Storm Form"
      >
        {id ? (
          <legend className={styles.titleForm}>Update your storm</legend>
        ) : (
          <legend className={styles.titleForm}>Create Storm</legend>
        )}
        <span className={styles.spanForm}>
          Here you can create or update your own storms
        </span>

        <div>
          <select
            className={styles.formSelect}
            defaultValue={'Select Region'}
            name="region"
            id="region-select"
          >
            <option value="Select Region" disabled>
              Select Region
            </option>
            <option value="America">America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        {!id ? (
          <>
            <input
              className={styles.formButton}
              type="text"
              name="title"
              placeholder="Title"
            />
            <label htmlFor="file">Update storm image</label>
            <input
              className={styles.formButton}
              type="file"
              id="file"
              placeholder="Update storm image"
              name="image"
              accept="image/png, image/jpeg, image/jpg, image/webp"
            />
            <input
              className={styles.formButtondescription}
              type="text"
              name="description"
              placeholder="Description"
            />
          </>
        ) : (
          <>
            <input type="text" name="title" placeholder="Title" />
            <input type="text" name="description" placeholder="Description" />
          </>
        )}
        <button className={styles.submitButton} type="submit">
          Load Storm
        </button>
      </form>
    </>
  );
}
