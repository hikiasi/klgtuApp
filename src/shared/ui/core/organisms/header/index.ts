import Header from "./header"
import HeaderActivities from "./header-activities"
import HeaderBody from "./header-body"
import HeaderBrand from "./header-brand"

export default Object.assign(Header, {
  Brand: HeaderBrand,
  Body: HeaderBody,
  Activities: HeaderActivities,
})
