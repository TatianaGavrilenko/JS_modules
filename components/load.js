const load = async function(module) {
    return await import('/components/' + module + '.js');
};

export default load;