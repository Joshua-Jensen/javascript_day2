// filter by selected button
// draw to page only the boxes that fit the filter\

const packagesArr = [{
    priorityLevel: 'express',
    isFragile: false,
    weight: 2,
    to: 'Sir Harrington IV',
    trackingNumber: '1324kjs'
},
{
    priorityLevel: 'standard',
    isFragile: true,
    weight: .5,
    to: 'Master Mercutio',
    trackingNumber: '1325sdk'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: .5,
    to: 'Mistress Ravenfeather',
    trackingNumber: 'jffd147'
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 4,
    to: 'B. Robert Brown',
    trackingNumber: 'acdc145'
},
{
    priorityLevel: 'express',
    isFragile: true,
    weight: 6,
    to: 'Chancellor Wallace',
    trackingNumber: '4b2l0z'
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 5,
    to: 'Sarah Sharm',
    trackingNumber: '8081baz'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: 12,
    to: 'Tae Lien',
    trackingNumber: 'suz2367'
}]
let packagesArrOrdered = packagesArr
let packagesElem = document.getElementById("packages")
let template = ``

drawPackages()

function drawPackages(packageFilters) {
    // this draws the packages that fit the incoming filter list
    console.log(packageFilters)
    switch (packageFilters) {
        case undefined: packagesArrOrdered.forEach(p => {
            template += `<div class="col-12  p-2">
            <span class="text-green m-2">to:</span>
            <span class="text-green m-2">${p.to
                }</span >
            <span class="text-green text-start m-2"> id:</span>
            <span class="text-green m-2">${p.trackingNumber}</span>
            </div > `
        });
            packagesElem.innerHTML = template
            template = ``
            console.log('redrawing')
            break

        case `heavy`:

            packagesArr.sort((pA, pB) => pA.heavy - pB.heavy)

            packagesArrOrdered.forEach(p => {
                template += `<div class="col-12  p-2">
            <span class="text-green">to:</span>
            <span class="text-green ">${p.to
                    }</span >
            <span class="text-green text-start"> id:</span>
            <span class="text-green">${p.trackingNumber}</span>
            </div > `
                console.log("plugged in")

            })
            packagesElem.innerHTML = template
            break

        case `priority`:


    }

} 
