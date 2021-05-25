/**
 * GitHub Badge module.
 */
import { React } from "../../deps.ts";

type Repo = {
  username: string;
  repoName: string;
};

export default function GHBadge(props: Repo) {
  const { username, repoName } = props;

  const repoUrl = `https://github.com/${username}/${repoName}`;
  const badgeUrl =
    `https://img.shields.io/static/v1?label=${username}&message=${repoName}&color=blue&logo=github`;
  const altText = `${username} - ${repoName}`;

  return (
    <a href={repoUrl}>
      <img src={badgeUrl} alt={altText} />
    </a>
  );
}
