function setStorageKey(key, value){
    chrome.storage.sync.set({ [key]: value });
}
function getStorageKeyValue(key, callback){
    chrome.storage.sync.get([key], function(result) {
       callback(result[key]);
    });
}



var end_cards_disabled_by_default = false;

getStorageKeyValue("end_cards_disabled_by_default", function(key) {
    if(key === undefined) {
        setStorageKey("end_cards_disabled_by_default", false);
    } else {
        end_cards_disabled_by_default = key;
        if(end_cards_disabled_by_default) $("#end_cards_default-enabled-disabled_slider").addClass("checked");
    }
});

$("#end_cards_default-enabled-disabled_slider").click(function () {
    $(this).toggleClass("checked", !end_cards_disabled_by_default);
    setStorageKey("end_cards_disabled_by_default", !end_cards_disabled_by_default);
    end_cards_disabled_by_default = !end_cards_disabled_by_default;
});