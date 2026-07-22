import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function PlaylistForm() {

  const initialValues = {
    playlistName: "",
    description: "",
    genre: "",
  };

  const validationSchema = Yup.object({

    playlistName: Yup.string()
      .required("Playlist Name is required"),

    genre: Yup.string()
      .required("Genre is required"),
  });

  return (

    <div className="container mt-5">

      <div className="card shadow">

        <div className="card-header bg-success text-white">
          <h3>Create Playlist</h3>
        </div>

        <div className="card-body">

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}

            onSubmit={(values, { resetForm }) => {
              alert(JSON.stringify(values, null, 2));
              resetForm();
            }}
          >

            {({ errors, touched }) => (

              <Form>

                <div className="mb-3">

                  <label>Playlist Name</label>

                  <Field
                    type="text"
                    name="playlistName"
                    className="form-control"
                  />

                  {touched.playlistName && errors.playlistName && (
                    <div className="text-danger">
                      {errors.playlistName}
                    </div>
                  )}

                </div>

                <div className="mb-3">

                  <label>Description</label>

                  <Field
                    as="textarea"
                    name="description"
                    className="form-control"
                  />

                </div>

                <div className="mb-3">

                  <label>Genre</label>

                  <Field
                    as="select"
                    name="genre"
                    className="form-select"
                  >

                    <option value="">Select Genre</option>

                    <option>Pop</option>

                    <option>Rock</option>

                    <option>Hip Hop</option>

                    <option>Classical</option>

                  </Field>

                  {touched.genre && errors.genre && (
                    <div className="text-danger">
                      {errors.genre}
                    </div>
                  )}

                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100"
                >
                  Create Playlist
                </button>

              </Form>

            )}

          </Formik>

        </div>

      </div>

    </div>

  );
}

export default PlaylistForm;