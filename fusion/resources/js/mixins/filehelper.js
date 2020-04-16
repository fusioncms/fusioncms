export default {
	filters: {
		bytes(value) {
		    let thresh = 1000

		    if (Math.abs(value) < thresh) {
		        return value + ' B'
		    }

		    let index = -1
		    let units = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
		    
		    do {
		        value /= thresh
		        ++index
		    } while (Math.abs(value) >= thresh && index < units.length - 1)

		    return value.toFixed(1) + ' ' + units[index]
		}
	}
}