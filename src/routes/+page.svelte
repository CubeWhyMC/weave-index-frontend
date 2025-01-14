<script lang="ts">
    import {fetchRepo} from "$lib";
    import Navbar from "../components/Navbar.svelte";

    let repo = fetchRepo()
</script>

<main>
    <Navbar/>
    <br/>
    <div class="mx-8">
        <div class="alert">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 class="stroke-info shrink-0 w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>View the datasource at <a href="https://github.com/CubeWhyMC/weave-index">CubeWhyMC/weave-index</a></span>
        </div>
        <div class="alert">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 class="stroke-info shrink-0 w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Forked from <a href="https://github.com/emirsassan/efo">emirsassan/efo</a></span>
        </div>
    </div>

    {#await repo}
        <span class="loading loading-spinner loading-lg"></span>
    {:then data}
        <div class="mx-8">
            <div class="alert">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     class="stroke-info shrink-0 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Update time: {data.timestamp}</span>
            </div>
        </div>
        {#each data.developers as mb}
            <p class="text-2xl m-4">{mb.name}</p>
            <div class="divider"></div>
            <div class="grid grid-cols-4 gap-4">
                {#each mb.projects as projs}
                    <div class="m-4">
                        <div class="card w-96 h-56 bg-neutral text-neutral-content">
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">{projs.name}</h2>
                                {#if projs.deprecated}
                                    <div class="badge badge-secondary">Deprecated</div>
                                {/if}
                                <p>{projs.description}</p>
                                <div class="card-actions justify-end">
                                    <a target="_blank" href={projs.url}>
                                        <button class="btn btn-primary">Github</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        {/each}
    {:catch e}
        <div class="m-8">
            <div class="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
                     viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>An error happened blame lunar devs</span>
            </div>
        </div>
    {/await}
</main>