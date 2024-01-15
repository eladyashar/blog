import {PostLIst} from "./post-list";

export function NewPostForm() {
  return (
    <form>
      <label htmlFor="title">Title</label>
      <input id="title" name="title" type="text" />
      <label htmlFor="content">Content</label>
      <textarea id="content" name="content" />
      <button type="submit">Create</button>
    </form>
  );
}
