# Bootstrap Responsive Tables

A drop-in solution for supporting tables on small screens.

## What you need:

1. **Bootstrap.** See their documentation for more info.
2. **The Bootstrap responsive table stylesheet.** You can download the zip, which contains both the compressed and uncompressed files. (I recommend using the compressed stylesheet in a production environment.)
3. **Add the appropriate class to the table element.** There are two classes available: `table-collapse-phone` and `table-collapse-tablet`. If you want your table to collapse only on very small viewports, use the first one. If you want it to collapse on tablet-sized viewports, use the second one. (You don't ever need to use both classes on a single element.)
4. **Add optional label support.** For table columns you want to display labels in collapsed viewports, add the class "has-label" and the label value in the "data-label" attribute.
  Example:
  ```
  <td class="has-label" data-label="Name">Paul</td>
  ```

Check it out in action [here](http://codepen.io/peiche/full/GpBNRd/) (resize the browser to see the tables collapse).

## Changelog

### 1.0.0
- First release.
